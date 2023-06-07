from django.db import models
from django.db.models import CASCADE

from pages.models import Page


class Project(models.Model):
	page = models.ForeignKey(to=Page, on_delete=CASCADE)
