from django.core import validators
from django.db import models


class ContactUs(models.Model):
	first_name = models.CharField(max_length=50)
	last_name = models.CharField(max_length=50)
	email = models.EmailField(max_length=250, validators=[validators.validate_email])
	message = models.TextField()
