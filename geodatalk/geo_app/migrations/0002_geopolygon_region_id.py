# Generated by Django 4.2.19 on 2025-02-18 06:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('geo_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='geopolygon',
            name='region_id',
            field=models.CharField(default=None, max_length=100),
            preserve_default=False,
        ),
    ]
