import glob
import json

filenames = glob.glob('images/*.jpg')

n = len(filenames)

data = []

for i in xrange(n):
    data.append([filenames[i],'undamaged','unanalyzed'])
    i = i + 1

json_str = json.dumps(data)
with open('data.js', 'w') as f:
     json.dump(data, f)
