from django.contrib import admin
from .models import Candidatura, PartidoPolitico, Eleccion

admin.site.register(Candidatura)
admin.site.register(PartidoPolitico)
admin.site.register(Eleccion)