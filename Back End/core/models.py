from django.db import models


class Site(models.Model):
	title = models.CharField(max_length=200)
	job_title = models.CharField(max_length=200)
