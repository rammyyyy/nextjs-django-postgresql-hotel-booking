// 'use client' เพื่อให้เป็น Client Component
'use client';

import Link from "next/link";
import { useState } from "react";

export default function Signup() {
	const [isLoading, setIsLoading] = useState(false); // สำหรับการจัดการสถานะการโหลด

	async function handleForm(e) {
		e.preventDefault(); // หยุดการรีเฟรชหน้าเมื่อกด submit

		const formData = new FormData(e.target); // อ่านข้อมูลจากฟอร์ม

		const fd = {
			'first_name': formData.get('first_name'),
			'last_name': formData.get('last_name'),
			'username': formData.get('username'),
			'password': formData.get('password'),
			'email': formData.get('email'),
			'profile': {
				'mobile': formData.get('mobile'),
			}
		};

		setIsLoading(true); // ตั้งค่าให้การโหลดเริ่มต้น

		const res = await fetch('http://127.0.0.1:8000/api/signup', {
			method: 'POST',
			body: JSON.stringify(fd),
			headers: {
				'Content-Type': 'application/json',
			}
		});

		const resData = await res.json();
		setIsLoading(false); // การโหลดเสร็จสมบูรณ์

		if (res.ok) {
			console.log('Sign up successful', resData);
		} else {
			console.log('Error:', resData);
		}
	}

	return (
		<section className="container my-5">
			<div className="row py-5">
				<div className="col-10 offset-1">
					<div className="row">
						<div className="col-md-6 col-12">
							<img src="/thumbs/gallery4.png" className="img-fluid" />
						</div>
						<div className="col-md-6 col-12">
							<h3 className="md-3">Sign Up</h3>
							<form onSubmit={handleForm}> {/* onSubmit ใน Client Component */}
								<div className="row mt-4">
									<div className="col-md-6 col-12 mb-3">
										<label htmlFor="input" className="form-label">First Name</label>
										<input type="text" className="form-control" placeholder="First Name" name="first_name" />
									</div>
									<div className="col-md-6 col-12 mb-3">
										<label htmlFor="input" className="form-label">Last Name</label>
										<input type="text" className="form-control" placeholder="Last Name" name="last_name" />
									</div>
									<div className="col-md-6 col-12 mb-3">
										<label htmlFor="input" className="form-label">Username</label>
										<input type="text" className="form-control" placeholder="Username" name="username" />
									</div>
									<div className="col-md-6 col-12 mb-3">
										<label htmlFor="input" className="form-label">Password</label>
										<input type="password" className="form-control" placeholder="********" name="password" />
									</div>
									<div className="col-md-6 col-12 mb-3">
										<label htmlFor="input" className="form-label">Mobile</label>
										<input type="number" className="form-control" placeholder="Mobile" name="mobile" />
									</div>
									<div className="col-md-6 col-12 mb-3">
										<label htmlFor="input" className="form-label">Email</label>
										<input type="email" className="form-control" placeholder="Email" name="email" />
									</div>
									<div className="col-md-6 col-12 mb-3">
										<button type="submit" className="col-md-8 btn bg mt-4" disabled={isLoading}>
											{isLoading ? 'Signing Up...' : 'Sign Up'}
										</button>
									</div>
									<p className="mt-2" style={{ fontSize: '13px' }}>
										Already have an account? <Link href="/user/signin">Sign In</Link>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
