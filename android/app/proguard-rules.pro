# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

-----------------------------------------------------

---
- name: User and Apache configuration
  hosts: webserver
  become: true

  tasks:
    - name: Create user amit
      ansible.builtin.user:
        name: amit
        state: present
        shell: /bin/bash

    - name: Install Apache
      ansible.builtin.apt:
        name: apache2
        state: present
        update_cache: true

    - name: Start Apache service
      ansible.builtin.service:
        name: apache2
        state: started
        enabled: true

ansible-playbook -i inventory playbook.yml

-------------------------------------------------
upstream apache_backends {
    server web1:80;
    server web2:80;
}

server {
    listen 80;

    location / {
        proxy_pass http://apache_backends;
    }
}
---------------------------------------------------
services:
  proxy:
    image: nginx:alpine
    ports:
      - "8088:80"
    volumes:
      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf:ro
    depends_on:
      - web1
      - web2
    restart: unless-stopped

  web1:
    image: httpd:alpine
    volumes:
      - ./web1.html:/usr/local/apache2/htdocs/index.html:ro
    restart: unless-stopped

  web2:
    image: httpd:alpine
    volumes:
      - ./web2.html:/usr/local/apache2/htdocs/index.html:ro
    restart: unless-stopped

    sudo docker compose up -d

    _____________________________________________________________

---
- name: Configure web server
  hosts: webserver
  become: true
  tasks:
    - name: Install and start Apache
      ansible.builtin.apt:
        name: apache2
        state: present
        update_cache: true
    - ansible.builtin.service:
        name: apache2
        state: started
        enabled: true

- name: Configure tools server
  hosts: tools
  become: true
  tasks:
    - name: Install Git and curl
      ansible.builtin.apt:
        name: [git, curl]
        state: present

- name: Configure database server
  hosts: database
  become: true
  tasks:
    - name: Install and start MariaDB
      ansible.builtin.apt:
        name: mariadb-server
        state: present
    - ansible.builtin.service:
        name: mariadb
        state: started
        enabled: true

        ansible-playbook -i inventory playbook.yml
----------------------------------------------------


import json

def lambda_handler(event, context):
    for records in event["Records"]:
        bucket_name = records["s3"]["bucket"]["name"]
        key = records["s3"]["object"]["key"]

        print(bucket_name)
        print(key)

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }

-----------------------------------------------------------

aamitbhadoria/automation:latest"docker build -t aamitbhadoria/automation:latest .
docker push aamitbhadoria/automation:latest

ssh admin@65.2.40.207 "sudo docker pull aamitbhadoria/automation:latest"
ssh admin@65.2.40.207 "sudo docker rm -f myweb || true"
ssh admin@65.2.40.207 "sudo docker run --name myweb -d -p 80:80 aamitbhadoria/automation:latest"

--------------------------------------------------------------


