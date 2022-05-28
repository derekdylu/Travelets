import uuid
from django.db import models
import datetime

# Create your models here.
class Itinerary(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100, null=True, blank=True)
    area = models.CharField(max_length=100, null=True, blank=True)
    vehicle = models.CharField(max_length=100, null=True, blank=True)
    startDate = models.DateField(auto_now_add=False, null=True, blank=True)
    endDate = models.DateField(auto_now=False, null=True, blank=True)
    attractions = models.JSONField(null=True, blank=True, editable=True)
    travel_time = models.JSONField(null=True, blank=True, editable=True)
    notes = models.JSONField(null=True, blank=True, editable=True)
    status = models.CharField(max_length=10, blank=True, default="ongoing") #, null=True
    host = models.CharField(max_length=100, null=True, blank=True)
    
    def __str__(self):
        return f'{self.title}'

    # 我開server會跳error
    def save(self, *args, **kwargs):
        if self.endDate < datetime.date.today():
            self.status = "past"
        else:
            self.status = "ongoing"
        super().save(*args, **kwargs)