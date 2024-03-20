from django.contrib import admin
from .models import Candidatura, PartidoPolitico, Eleccion, Provincia, Municipio, Sector, Candidato, Circunscripcion,ColegioElectoral

admin.site.register(Candidatura)
admin.site.register(PartidoPolitico)
admin.site.register(Eleccion)

admin.site.register(Provincia)
admin.site.register(Municipio)
admin.site.register(Sector)
admin.site.register(Circunscripcion)
admin.site.register(ColegioElectoral)

admin.site.register(Candidato)
