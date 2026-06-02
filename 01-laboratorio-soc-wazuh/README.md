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

---

## Instalación y validación inicial de Wazuh

### Preparación de la máquina virtual

Para el laboratorio se creó una máquina virtual dedicada exclusivamente al servidor Wazuh.

Configuración utilizada:

| Recurso                   | Valor                   |
| ------------------------- | ----------------------- |
| Sistema operativo         | Ubuntu Server 24.04 LTS |
| Hostname                  | wazuh-server            |
| Usuario de administración | joudy                   |
| CPU                       | 4 vCPU                  |
| Memoria RAM               | 8 GB                    |
| Disco                     | 80 GB                   |
| Dirección IP              | 192.168.0.20            |
| Red                       | Adaptador puente        |

La máquina virtual se desplegó en una red local de laboratorio, permitiendo el acceso al dashboard de Wazuh desde el equipo anfitrión mediante navegador web.

---

### Instalación de Wazuh

Se realizó una instalación all-in-one de Wazuh sobre Ubuntu Server. Este tipo de instalación despliega los componentes principales en el mismo servidor, lo que resulta adecuado para un entorno de laboratorio.

Componentes instalados:

* Wazuh Manager
* Wazuh Indexer
* Wazuh Dashboard
* Filebeat
* Certificados internos para la comunicación entre componentes

Comandos principales utilizados:

```bash
sudo apt update
sudo apt install curl -y

curl -sO https://packages.wazuh.com/4.14/wazuh-install.sh
sudo bash ./wazuh-install.sh -a
```

Durante la instalación, el asistente generó las credenciales iniciales de acceso al dashboard.

Por seguridad, las credenciales no se documentan en este repositorio.

---

### Validación de servicios

Tras finalizar la instalación se comprobó el estado de los servicios principales:

```bash
sudo systemctl status wazuh-manager --no-pager
sudo systemctl status wazuh-indexer --no-pager
sudo systemctl status wazuh-dashboard --no-pager
```

Resultado obtenido:

| Servicio        | Estado           |
| --------------- | ---------------- |
| wazuh-manager   | active (running) |
| wazuh-indexer   | active (running) |
| wazuh-dashboard | active (running) |

Esto confirma que los componentes principales de Wazuh se encuentran iniciados correctamente.

---

### Validación de puertos

También se revisaron los puertos principales utilizados por Wazuh:

```bash
sudo ss -tulpen | grep -E ':443|:9200|:1514|:1515|:55000'
```

Resultado validado:

| Puerto | Servicio        | Función                            |
| ------ | --------------- | ---------------------------------- |
| 443    | Wazuh Dashboard | Acceso web HTTPS al panel de Wazuh |
| 1514   | Wazuh Remoted   | Comunicación de agentes            |
| 1515   | Wazuh Authd     | Registro de agentes                |
| 55000  | Wazuh API       | API de administración              |
| 9200   | Wazuh Indexer   | Indexación y búsqueda interna      |

El dashboard quedó accesible desde el navegador del equipo anfitrión mediante:

```text
https://192.168.0.20
```

---

### Acceso al dashboard

Se verificó el acceso correcto al Wazuh Dashboard desde el navegador del equipo anfitrión.

El navegador mostró un aviso de certificado no confiable, comportamiento esperado en un laboratorio al utilizar certificados autofirmados.

Una vez aceptado el aviso, se accedió correctamente al panel web de Wazuh.

---

### Conclusión de la fase

La instalación inicial de Wazuh se completó correctamente.

Se validó que:

* El servidor Wazuh está operativo.
* Los servicios principales están activos.
* Los puertos necesarios están escuchando.
* El dashboard es accesible desde el equipo anfitrión.
* El entorno queda preparado para añadir agentes Windows y Linux.
