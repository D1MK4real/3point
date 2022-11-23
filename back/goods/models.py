from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Good(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    old_price = models.IntegerField()
    image = models.ImageField(upload_to='pics', null=True)
    use_for = models.CharField(max_length=100)
    size = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.name
