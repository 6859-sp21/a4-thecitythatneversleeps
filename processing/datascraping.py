import csv

ncfile = open('NoiseComplaint1921.csv', 'r')
nycfile = open('nyczipdata.csv', 'r')

ncwriter = csv.writer(ncfile)
ncreader = csv.reader(ncfile)

nycreader = csv.reader(nycfile)


mydict = {}
for row in nycreader:
	k = row[0]
	a = row[1:]
	mydict[k] = a
	#print(mydict)


with open('NoiseDataFinalCondensed.csv', 'w') as final_file:
	final_writer = csv.writer(final_file)
	for row in ncreader:
		zip = row[13]
		try:
			f_list = row[0:13] + [zip] + mydict[zip] + row[14:]
			final_list = f_list[0:7] + f_list[10:15] + f_list[16:20] + [f_list[25]] + [f_list[48]]
		except:
			f_list = row[0:14] + mydict['zip'] + row[14:]
			final_list = f_list[0:7] + f_list[10:15] + f_list[16:20] + [f_list[25]] + [f_list[48]]
		
		final_writer.writerow(final_list)
	




ncfile.close()
nycfile.close()



		