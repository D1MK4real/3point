from django.db import models
from goods.models import Good
from django.contrib.auth.models import User
# Create your models here.


class Sizes(models.Model):
    name = models.CharField(max_length=100)
    size = models.IntegerField()
    count = models.IntegerField()
    good = models.ForeignKey(Good, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name
