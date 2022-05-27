# Generated by Django 3.2.5 on 2022-05-27 16:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('itinerary', '0006_rename_location_itinerary_area'),
    ]

    operations = [
        migrations.AddField(
            model_name='itinerary',
            name='host',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='itinerary',
            name='status',
            field=models.CharField(blank=True, default='ongoing', max_length=10),
        ),
    ]
