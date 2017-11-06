#
# StromDAO Business Object - Decentralized Apps
# Deployment via Makefile to automate general Quick Forward 
#

PROJECT = "Fury.Network - Mieter UI"


all: commit

commit: ;git add -A;git commit -a; git push;ipfs add -r *

