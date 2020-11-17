FROM node:15.2-buster

LABEL author="Toto-Ad" 

RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV HOME=/home/node

WORKDIR $HOME/app

# RUN echo 'alias watchs="npm run watch"' >> ~/.bashrc
# RUN echo 'alias installs="npm install"' >> ~/.bashrc