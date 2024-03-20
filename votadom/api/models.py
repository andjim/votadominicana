from django.db import models

#Tablas de divicion Territorial
class Provincia(models.Model):
    cod = models.CharField("Codigo", max_length=10)
    descripcion = models.CharField("Descripcion", max_length=30)

class Municipio(models.Model):
    cod = models.CharField("Codigo", max_length=10)
    descripcion = models.CharField("Descripcion", max_length=30)
    id_provincia = models.ForeignKey(Provincia, on_delete=models.RESTRICT)

class Sector(models.Model):
    cod = models.CharField("Codigo", max_length=10)
    descripcion = models.CharField("Descripcion", max_length=30)
    id_provincia = models.ForeignKey(Municipio, on_delete=models.RESTRICT)

# Tablas de negocio
class Circunscripcion(models.Model):
    nombre = models.CharField(max_length=50)

class ColegioElectoral(models.Model):
    cod = models.CharField(max_length=10)
    id_circunscripcion = models.ForeignKey(Circunscripcion, on_delete=models.RESTRICT)
    id_sector = models.ForeignKey(Sector, on_delete=models.RESTRICT)

class Candidatura(models.Model):
    descripcion = models.CharField(max_length=10)
    es_dependiente = models.BooleanField(default=False)

class PartidoPolitico(models.Model):
    nombre = models.CharField(max_length=60)
    alias = models.CharField(max_length=6)
    color_primario = models.CharField(max_length=6)
    color_secundario = models.CharField(max_length=6)
    logo = models.ImageField(upload_to="partidos")

# Dependiente de eleccion 
class Eleccion(models.Model):
    descripcion = models.CharField(max_length=60)
    fecha_apertura = models.DateTimeField()
    fecha_cierre = models.DateTimeField()
    estado = models.CharField(max_length=10,default="draft")
    
class Votante(models.Model):
    cedula = models.CharField(max_length=11)
    cod_colegio = models.CharField(max_length=5)
    fecha_voto = models.DateTimeField()
    id_eleccion = models.ForeignKey(Eleccion, on_delete=models.CASCADE)
    cod_verificador = models.CharField(max_length=255)

class Candidato(models.Model):
    id_partido = models.ForeignKey(PartidoPolitico, on_delete=models.CASCADE)
    id_candidatura = models.ForeignKey(Candidatura, on_delete=models.CASCADE)
    id_eleccion = models.ForeignKey(Eleccion, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=60)
    foto = models.ImageField(upload_to="candidatos")
