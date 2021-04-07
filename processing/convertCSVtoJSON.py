import csv
import json
 
# Decide the two file paths according to your
# computer system
csvFilePath = r'../data/MCDPleaseWork.csv'
jsonFilePath1 = r'../data/FinalLoudMusicComplaintsData1.json'
jsonFilePath2 = r'../data/FinalLoudMusicComplaintsData2.json'
jsonFilePath3 = r'../data/FinalLoudMusicComplaintsData3.json'

# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json():
     
    # create a dictionary
    data1 = {}
    data2 = {}
    data3 = {}
     
    # Open a csv reader called DictReader
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
         
        # Convert each row into a dictionary
        # and add it to data
        i = 0
        for rows in csvReader:
            del rows[""]

            loc = rows["Location"][1:-1].split(", ")
            if len(loc) > 1:
                rows["Location"] = "[" + loc[1] + ", " + loc[0] + "]"

            # Assuming a column named 'No' to
            # be the primary key
            if i % 3 == 0:
                data1[i] = rows
            elif i % 3 == 1:
                data2[i] = rows
            else:
                data3[i] = rows

            i+=1
 
    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open(jsonFilePath1, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data1, indent=4))
    
    with open(jsonFilePath2, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data2, indent=4))

    with open(jsonFilePath3, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data3, indent=4))
         
# Driver Code

# Call the make_json function
make_json()