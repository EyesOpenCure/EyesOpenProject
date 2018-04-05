from Bio import pairwise2 as pair #http://biopython.org/
import xlsxwriter as xlsx #https://pypi.python.org/pypi/XlsxWriter

#General path to files formats (insert paths to your own work directory)
str_EYS="[path to EYS sequences]/Q5T1H1-{}.txt"
str_agrin="[path to agrin sequences]/O00468-{}.txt"
str_per="[path to perlecan sequences]/P98160.txt"

#Protein Id formats
id_EYS="Q5T1H1-{}"
id_agrin="O00468-{}"
id_per="P98160"

#Numbers of isoforms
n_EYS=4
n_agrin=7

workbook=xlsx.Workbook('alignments.xlsx')
worksheet=workbook.add_worksheet()

#Write column and line labels:
for i in range (1, n_agrin+1): worksheet.write(0, i, id_agrin.format(str(i)))
for i in range (1, n_EYS+1): worksheet.write(i, 0, id_EYS.format(str(i)))
worksheet.write(0, n_agrin+1, id_per)

#Calculation loop (no penalties for gaps and mismatches, matches are worth 1 point)
for i in range (1, n_EYS+1):
    with open(str_EYS.format(str(i)), 'r') as EYS:
        seq = EYS.read().replace("\n", '')

    for j in range (1, n_agrin+1):
        with open(str_agrin.format(str(j)), 'r') as agr:
            seq2 = agr.read().replace("\n", '')

        alignment=pair.align.globalxx(seq, seq2) #Returns a list of tuples with alignment data
        scores=[]
        for k in alignment: scores.append(k[-3]) #Compile a list of alignment scores
        worksheet.write(i, j, str(max(scores)) + '/' + str(len(scores))) #Write data to worksheet (max_score/number_of_aligments)

    with open (str_per, 'r') as per:
        seq3=per.read().replace("\n", '')

    alignment = pair.align.globalxx(seq, seq3) #Same as the above
    scores = []
    for k in alignment: scores.append(k[-3])
    worksheet.write(i, n_agrin + 1, str(max(scores)) + '/' + str(len(scores)))

workbook.close()