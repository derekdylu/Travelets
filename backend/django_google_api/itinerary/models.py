import uuid
from django.db import models

# Create your models here.
class Itinerary(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    trip_name = models.CharField(max_length=100, null=True, blank=True)
    location = models.CharField(max_length=100, null=True, blank=True)
    vehicle = models.CharField(max_length=100, null=True, blank=True)
    start_date = models.DateField(auto_now_add=False, null=True, blank=True)
    end_date = models.DateField(auto_now=False, null=True, blank=True)
    attractions = models.JSONField(null=True, blank=True, editable=True)
    travel_time = models.JSONField(null=True, blank=True, editable=True)
    notes = models.JSONField(null=True, blank=True, editable=True)
    
    def __str__(self):
        return f'{self.trip_name}'