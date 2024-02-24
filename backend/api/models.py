from django.db import models

class User(models.Model):
    name=models.CharField(max_length=100)
    email=models.CharField(unique=True,max_length=100)
    password=models.CharField(max_length=100)
    fb_name=models.CharField(blank=True,null=True,max_length=100)
    ig_name=models.CharField(blank=True,null=True,max_length=100)
    x_name=models.CharField(blank=True,null=True,max_length=100)

    def _str_(self):
        return self.name

