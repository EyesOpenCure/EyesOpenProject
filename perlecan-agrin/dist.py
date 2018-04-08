import stringdist as s #https://pypi.python.org/pypi/StringDist
import xlsxwriter as xlsx #https://pypi.python.org/pypi/XlsxWriter

#General path to files formats (insert paths to your own work directory)
str_EYS="[path to EYS sequences]/Q5T1H1-{}.txt"
str_agrin="[path to agrin sequences]/O00468-{}.txt"
str_per="[path to perlecan sequences]P98160.txt"

#Protein label formats (for the worksheet)
id_EYS="Q5T1H1-{}"
id_agrin="O00468-{}"
id_per="P98160"

n_EYS=4 #Amount of isoforms EYS and agrin have (perlecan has only one)
n_agrin=7

#Initialize worksheet to write in
workbook=xlsx.Workbook('dist.xlsx')
worksheet=workbook.add_worksheet()

#Write column and line labels:
for i in range (1, n_agrin+1): worksheet.write(0, i, id_agrin.format(str(i)))
for i in range (1, n_EYS+1): worksheet.write(i, 0, id_EYS.format(str(i)))
worksheet.write(0, n_agrin+1, id_per)

#Calculation loop
for i in range (1, n_EYS+1):
    with open(str_EYS.format(str(i)), 'r') as EYS:
        seq = EYS.read().replace("\n", '')
    for j in range (1, n_agrin+1):
        with open(str_agrin.format(str(j)), 'r') as agr:
            seq2 = agr.read().replace("\n", '')

        dist=s.levenshtein(seq, seq2)
        worksheet.write(i, j, dist) #Write distance to worksheet
    with open (str_per, 'r') as per:
        seq3=per.read().replace("\n", '')
    dist=s.levenshtein(seq, seq3)
    worksheet.write(i, n_agrin+1, dist) #write distance to worksheet


workbook.close()
