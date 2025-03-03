import Link from "next/link"

export default function Signin() {
	return (
		<section className="container my-5">
			<div className="row py-5">
				<div className="col-10 offset-1">
					<div className="row">
						<div className="col-md-6 col-12">
							<img src="/thumbs/gallery5.png" className="img-fluid" />
						</div>
						<div className="col-md-6 col-12">
							<h3 className="md-3">Sign In</h3>
							<div className="row mt-4">
								<div className="col-md-12 col-12 mb-3">
									<label for="input" class="form-label">Username</label>
									<input type="text" class="form-control" placeholder="Username" />
								</div>
								<div className="col-md-12 col-12 mb-3">
									<label for="input" class="form-label">Password</label>
									<input type="password" class="form-control" placeholder="********" />
								</div>
								<div className="col-md-6 col-12 mb-3">
									<button className="btn col-md-8 bg mt-4">Sign In</button>
								</div>
								<p className="mt-2" style={{ 'fontSize': '13px' }}>Didn't have an account? <Link href="/user/signup">Sign Up</Link></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section >
	)
}
