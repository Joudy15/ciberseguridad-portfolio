# 01 - Laboratorio SOC con Wazuh

## Estado del proyecto

Proyecto en construcción.

## Objetivo

El objetivo de este proyecto es montar un laboratorio básico de ciberseguridad defensiva orientado a tareas de un analista SOC N1.

Se utilizará Wazuh como plataforma SIEM/XDR para recoger eventos de seguridad, revisar alertas, analizar logs y documentar evidencias generadas en un entorno de laboratorio.

## Alcance inicial

Este laboratorio se realizará en un entorno controlado y no utilizará información real de empresas, clientes o terceros.

El proyecto incluirá:

* Instalación de Wazuh en Linux.
* Acceso al Wazuh Dashboard.
* Revisión de servicios instalados.
* Alta de agentes monitorizados.
* Generación controlada de eventos.
* Análisis básico de alertas.
* Documentación de evidencias y conclusiones.

## Entorno previsto

| Equipo           | Sistema operativo | Rol                              |
| ---------------- | ----------------- | -------------------------------- |
| Wazuh Server     | Linux             | Servidor Wazuh                   |
| Endpoint Linux   | Linux             | Equipo monitorizado              |
| Endpoint Windows | Windows 10/11     | Equipo monitorizado              |
| Kali Linux       | Kali Linux        | Generación controlada de eventos |

## Herramientas previstas

* Wazuh
* Linux
* Windows 10/11
* Kali Linux
* Nmap
* Sysmon
* Windows Event Viewer
* GitHub

## Fases del proyecto

### 1. Preparación del entorno Linux

En esta fase se comprobarán los recursos de la máquina Linux donde se instalará Wazuh, incluyendo sistema operativo, memoria RAM, almacenamiento disponible y CPU.

### 2. Instalación de Wazuh

Se realizará la instalación de Wazuh en Linux, documentando los comandos utilizados y las evidencias principales del proceso.

### 3. Acceso al Wazuh Dashboard

Se comprobará el acceso al panel web de Wazuh y se documentará la primera conexión al dashboard.

### 4. Alta de agentes

Se añadirán equipos monitorizados al laboratorio, empezando por un endpoint Linux y posteriormente un endpoint Windows.

### 5. Generación de eventos

Se generarán eventos de seguridad de forma controlada para comprobar que Wazuh los detecta correctamente.

Ejemplos de eventos previstos:

* Intentos de autenticación fallidos.
* Escaneo básico con Nmap.
* Eventos de firewall.
* Eventos de Windows.
* Alertas de seguridad generadas en Wazuh.

### 6. Análisis de alertas

Se analizarán las alertas generadas desde el punto de vista de un analista SOC N1, separando hechos confirmados, hipótesis y siguientes pasos recomendados.

## Evidencias previstas

Las evidencias se irán añadiendo a medida que avance el proyecto.

Ejemplos de evidencias:

* Captura de la instalación de Wazuh finalizada.
* Captura de los servicios de Wazuh activos.
* Captura del acceso al Wazuh Dashboard.
* Captura de agentes conectados.
* Captura de alertas generadas.
* Logs relevantes del sistema.
* Comandos utilizados durante la práctica.

## Criterio de análisis

Para cada alerta o evento se documentará:

* Qué se observa.
* Qué equipo está afectado.
* Qué usuario o IP interviene.
* Qué riesgo podría existir.
* Qué evidencias apoyan el análisis.
* Qué no se puede confirmar todavía.
* Qué siguientes pasos se recomiendan.

## Próximos pasos

* Preparar la máquina Linux.
* Comprobar recursos del sistema.
* Instalar Wazuh.
* Acceder al dashboard.
* Añadir primeras capturas.
* Documentar el procedimiento realizado.
* Generar los primeros eventos de prueba.
* Analizar las primeras alertas.

## Conclusión

Este proyecto permitirá practicar tareas básicas de un entorno SOC N1, como monitorización, análisis de logs, revisión de alertas y documentación técnica de eventos de seguridad.

El objetivo no es únicamente instalar Wazuh, sino demostrar capacidad para interpretar eventos, trabajar con evidencias y comunicar hallazgos de forma clara y profesional.
