library(data.table)
library(tidyr)

# import the data
data <- fread("311_Noise_Complaints.csv")
head(data)

# split the created date into year, month, date, time, and AM/PM
data2 <- separate(data, "Created Date", c("Created Year", "Created Month", "Created Day", "Created Time", "Created AM/PM"), sep = " ")
data2$`Created AM/PM` <- data2$`Created Day`
data2$`Created Time` <- data2$`Created Month`
data2$`Created Month` <- substr(data2$`Created Year`, 1, 2)
data2$`Created Day` <- substr(data2$`Created Year`, 4, 5)
data2$`Created Year` <- substr(data2$`Created Year`, 7, 10)

# convert the year to an integer
data2$`Created Year` <- as.integer(data2$`Created Year`)

# filter by year
data3 <- data2[which(data2$`Created Year` >= 2019),]

write.csv(data3, "311_Noise_Complaints_2019+.csv")
