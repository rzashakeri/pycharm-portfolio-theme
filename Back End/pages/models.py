from django.db import models


class Page(models.Model):
	title = models.CharField(max_length=100)
	slug = models.SlugField(max_length=100)
	icon = models.ImageField(upload_to="icons/")
