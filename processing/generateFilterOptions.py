import csv
import json
 
# Decide the two file paths according to your
# computer system
csvFilePath = r'../src/data/MCDPleaseWork.csv'
jsonFilePath = r'../src/data/filterOptions.json'

# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json():
     
    # create a dictionary
    data = {}
     
    # Open a csv reader called DictReader
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
         
        # Convert each row into a dictionary
        # and add it to data
        i = 0
        for rows in csvReader:
            del rows[""]
            
            if rows["Location"] != "":
                loc = rows["Location"][1:-1].split(", ")
                if len(loc) > 1:
                    rows["Location"] = "[" + loc[1] + ", " + loc[0] + "]"

                # Assuming a column named 'No' to
                # be the primary key
                data[i] = rows

                i+=1

    filterOptions = {
        "Location Type": [],
        "borough": [],
        "neighborhood": [],
        "Incident Zip": [],
    }

    fieldNames = ["Location Type", "borough", "neighborhood", "Incident Zip"]
    for (key, datapoint) in data.items():
        for name in fieldNames:
            if datapoint[name] not in filterOptions[name]:
                filterOptions[name].append(datapoint[name])
            
 
    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps({'filterOptions': filterOptions}, indent=4))
         
# Driver Code

# Call the make_json function
make_json()