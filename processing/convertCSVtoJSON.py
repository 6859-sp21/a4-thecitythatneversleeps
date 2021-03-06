import csv
import json
 
# Decide the two file paths according to your
# computer system
csvFilePath = r'../src/data/LoudMusicComplaintsData2020_1_excludedZip.csv'
jsonFilePath1 = r'../src/data/allMapData.json'

# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json():
     
    # create a list
    data = []
     
    # Open a csv reader called DictReader
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
         
        # Convert each row into a dictionary
        # and add it to data
        for rows in csvReader:
            del rows[""]
            
            if rows["Location"] != "":
                loc = rows["Location"][1:-1].split(", ")
                if len(loc) > 1:
                    rows["Location"] = "[" + loc[1] + ", " + loc[0] + "]"

                # Assuming a column named 'No' to
                # be the primary key
                data.append(rows)
 
    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open(jsonFilePath1, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))
         
# Driver Code

# Call the make_json function
make_json()