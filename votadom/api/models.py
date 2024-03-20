from django.db import models

# Tablas dimensionales
class Candidatura(models.Model):
    descripcion = models.CharField(max_length=10)

class PartidoPolitico(models.Model):
    nombre = models.CharField(max_length=60)
    alias = models.CharField(max_length=6)
    color_primario = models.CharField(max_length=6)
    color_secundario = models.CharField(max_length=6)
    logo = models.ImageField(upload_to="partidos")

# 
class Eleccion(models.Model):
    descripcion = models.CharField(max_length=60)
    fecha_apertura = models.DateTimeField()
    fecha_cierre = models.DateTimeField()
    
class Votante(models.Model):
    cedula = models.CharField(max_length=11)
    cod_colegio = models.CharField(max_length=5)
    fecha_voto = models.DateTimeField()
    id_eleccion = models.ForeignKey(Eleccion, on_delete=models.CASCADE)
    cod_verificador = models.CharField(max_length=255)

