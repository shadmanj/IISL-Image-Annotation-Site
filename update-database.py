import glob
import csv
from lxml import etree as et
import sys

#Import a list of all files in the directory
filenames = glob.glob('images/*.jpg')

n = len(filenames)

#Create xml file containing filenames of all images in the database

page = et.Element('images')
doc  = et.ElementTree(page)

i = 0

while (i < n):
    imageElt = et.SubElement(page, 'image', id=str(i+1),rel=filenames[i])
    descriptionElt = et.SubElement(imageElt, 'description')
    descriptionElt.text = "0"
    i = i + 1

outFile = open('images/image-data.xml','w')
doc.write(outFile, pretty_print=True)
outFile.close()

