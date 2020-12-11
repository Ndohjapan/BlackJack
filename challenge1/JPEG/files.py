import os
import pprint
import glob

print(os.chdir(r"C:\\Users\\USER\\PycharmProjects\JavaScript_Tutorial\\challenge1\\JPEG"))

images = glob.glob("*.jpg")

for i in range(len(images)):
    images[i] = f"/challenge1/JPEG/{images[i]}"

images_dict = {2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[], 11:[]}
key = 2

for i in range(4,36):

    if i!=4 and i%4 == 0:
        key += 1

    images_dict[key].append(images[i])


for i in range(4):
    images_dict[key+1].append(images[i])

for i in range(36, 52):
    images_dict[key+2].append(images[i])

pprint.pprint(images_dict)
