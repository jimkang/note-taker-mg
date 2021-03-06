include config.mk

HOMEDIR = $(shell pwd)
SSHCMD = ssh $(USER)@$(SERVER)
PRIVSSHCMD = ssh $(PRIVUSER)@$(SERVER)
PROJECTNAME = note-taker
APPDIR = /opt/$(PROJECTNAME)

pushall: update-remote
	git push origin master

run:
	GITDIR=$(GITDIR) node_modules/.bin/note-taker configs

sync:
	rsync -a $(HOMEDIR)/ $(USER)@$(SERVER):$(APPDIR) --exclude node_modules/ \
	  --omit-dir-times --no-perms
	$(SSHCMD) "cd /opt/$(PROJECTNAME) && npm install"

restart-remote:
	$(PRIVSSHCMD) "sudo service $(PROJECTNAME) restart"

start-service:
	$(PRIVSSHCMD) "sudo service $(PROJECTNAME) start"

stop-service:
	$(PRIVSSHCMD) "sudo service $(PROJECTNAME) stop"

update-remote: sync restart-remote

install-service:
	$(PRIVSSHCMD) "sudo cp $(APPDIR)/$(PROJECTNAME).service /etc/systemd/system && \
	sudo systemctl enable $(PROJECTNAME)"

set-up-app-dir:
	$(SSHCMD) "mkdir -p $(APPDIR)"

initial-setup: set-up-app-dir sync install-service

check-status:
	$(SSHCMD) "systemctl status $(PROJECTNAME)"

check-log:
	$(SSHCMD) "journalctl -r -u $(PROJECTNAME)"

prettier:
	prettier --single-quote --write "**/*.js"

try-local-post:
	curl -X POST -H 'Authorization: Key $(SECRET)' -H 'x-note-archive: deathmtn' -H 'content-type: application/json' -d '{"date": "2018-06-14", "caption": "Makefiles R gr8"}' http://localhost:5678/note

try-server-post:
	#curl -X POST -H 'Authorization: Key $(SECRET)' -H 'x-note-archive: deathmtn' -H 'content-type: application/json' -d '{"caption": "Makefiles R gr8"}' https://smidgeo.com/note-taker/note
	curl -X POST -H 'Authorization: Key $(SECRET)' -H 'x-note-archive: deathmtn' -H 'content-type: application/json' -d '{"caption": "Makefiles R gr8"}' http://midnight-giant:5678/note

set-up-git-on-notes-dir:
	mkdir -p $(NOTESGITREMOTEDIR) && \
	  cd $(NOTESGITREMOTEDIR) && \
	  git --bare init && \
	  cd $(NOTESDIR) && \
	  git init && \
	  git add . && \
	  git commit -m"Initial commit." && \
	  git remote add origin $(NOTESGITREMOTEDIR) && \
	  git push origin master

set-up-git-on-notes-dir-remotely:
	$(SSHCMD) "cd $(APPDIR) && make set-up-git-on-notes-dir"
