FROM python:3.10.13-alpine3.19

RUN apk --no-cache add nodejs npm

RUN mkdir app
RUN mkdir app/votadom

COPY requirements.txt app/requirements.txt
COPY package.json app/package.json

WORKDIR app/

RUN pip install -r requirements.txt
RUN npm install

EXPOSE 8080

ENTRYPOINT [ "python", "votadom/manage.py" ]
CMD [ "runserver", "0.0.0.0:8080" ]
