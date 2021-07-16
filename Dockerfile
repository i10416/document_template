FROM node:14.17.3

RUN apt update -y && apt upgrade -y \
  && apt dist-upgrade -y && apt autoremove -y \
  && apt autoclean -y
RUN apt install libnss3 libx11-xcb-dev libgl-dev libxcb-dri3-0 libgbm-dev libxkbcommon-dev libasound2-dev libatk-bridge2.0-dev  fonts-ipafont-gothic fonts-ipafont-mincho  -y
ENV PYENV_ROOT $HOME/.pyenv
ENV PATH $PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH 
RUN git clone https://github.com/pyenv/pyenv.git $PYENV_ROOT \
  && pyenv install 3.9.6 \
  && pyenv global 3.9.6 \
  && pyenv rehash

WORKDIR /app
ADD ./requirements.txt /app/requirements.txt
RUN pip install --upgrade pip &&  pip install -r requirements.txt

RUN wget -nv -O- https://download.calibre-ebook.com/linux-installer.sh | sh /dev/stdin

COPY package*.json /app/
RUN npm install

COPY . /app/
