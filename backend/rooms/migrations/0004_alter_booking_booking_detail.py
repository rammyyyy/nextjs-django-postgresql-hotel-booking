# Generated by Django 5.1.6 on 2025-03-02 18:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0003_alter_booking_booking_detail'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='booking_detail',
            field=models.JSONField(blank=True, null=True),
        ),
    ]
