import uuid
from django.db import models
import datetime
from datetime import datetime,date

# Create your models here.
class Itinerary(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tripname = models.CharField(max_length=100, null=True, blank=True)
    location = models.CharField(max_length=100, null=True, blank=True)
    vehicle = models.CharField(max_length=100, null=True, blank=True)
    startDate = models.DateField(auto_now_add=False,  blank=True, default=date.today) # null=True,
    endDate = models.DateField(auto_now=False, blank=True, default=date.today)  #, null=True
    attractions = models.JSONField(null=True, blank=True, editable=True)
    travel_time = models.JSONField(null=True, blank=True, editable=True)
    notes = models.JSONField(null=True, blank=True, editable=True)
    status = models.CharField(max_length=10, blank=True, null=True) #, default="ready"
    host = models.CharField(max_length=100, null=True, blank=True)
    
    def __str__(self):
        return f'{self.tripname}'

    # 應該解決了
    def save(self, *args, **kwargs):
        flag = 0
        if self.endDate:
            if type(self.endDate) is str:
                endDate_obj = datetime.strptime(self.endDate, '%Y-%m-%d').date()
            else:
                endDate_obj = self.endDate

            if endDate_obj < date.today():
                self.status = "past"
            else:
                flag = 1

        if self.startDate:
            if type(self.startDate) is str:
                startDate_obj = datetime.strptime(self.startDate, '%Y-%m-%d').date()
            else:
                startDate_obj = self.startDate

            if startDate_obj > date.today():
                self.status = "ready"
            elif flag == 1:
                self.status = "ongoing"


            super().save(*args, **kwargs)