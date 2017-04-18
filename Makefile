# Put your user name below:                                                                                                                                                                                                                   
USER= gavinhannerc
CC= g++ -std=c++11

#For Optimization                                                                                                                                                                                                                             
#CFLAGS= -O2                                                                                                                                                                                                                                  
#For debugging                                                                                                                                                                                                                                
CFLAGS= -g

RM= /bin/rm -f

all: PutHTML
                                                                                                                                                                                                                            
PutHTML:
	cp xmlPT.css /var/www/html/class/softdev/$(USER)/Project5_XMLPeriodicTable
	cp xmlPT.html /var/www/html/class/softdev/$(USER)/Project5_XMLPeriodicTable
	cp xmlPT.js  /var/www/html/class/softdev/$(USER)/Project5_XMLPeriodicTable
	cp jquery-3.1.1.min.js  /var/www/html/class/softdev/$(USER)/Project5_XMLPeriodicTable
	cp allelements.xml  /var/www/html/class/softdev/$(USER)/Project5_XMLPeriodicTable

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/class/softdev/$(USER)/Project5_XMLPeriodicTable