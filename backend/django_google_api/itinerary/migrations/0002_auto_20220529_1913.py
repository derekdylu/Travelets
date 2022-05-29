# Generated by Django 3.2.5 on 2022-05-29 19:13

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('itinerary', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='itinerary',
            name='endDate',
            field=models.DateField(blank=True, default=datetime.date.today),
        ),
        migrations.AlterField(
            model_name='itinerary',
            name='startDate',
            field=models.DateField(blank=True, default=datetime.date.today),
        ),
        migrations.AlterField(
            model_name='itinerary',
            name='status',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
