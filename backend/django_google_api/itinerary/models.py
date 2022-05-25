from django.db import models

# Create your models here.
class Itinerary(models.Model):
    
    title = models.CharField(verbose_name="Title",max_length=100, null=True, blank=True)
    start_date = models.DateField(auto_now_add=False, null=True, blank=True)
    
    def __str__(self):
        return f'{self.title}'