# Generated by Django 3.2.5 on 2022-05-27 08:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('itinerary', '0007_itinerary_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='itinerary',
            name='status',
            field=models.CharField(blank=True, default='ongoing', max_length=10),
        ),
    ]
