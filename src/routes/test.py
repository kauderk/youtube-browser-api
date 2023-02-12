data = [{"start":0,"end":1130,"value":1},{"start":1130,"end":1130,"value":0.6931619140266353},{"start":2260,"end":1130,"value":0.7665937358039919},{"start":3390,"end":1130,"value":0.7757196274620811},{"start":4520,"end":1130,"value":0.6349275851194229}]

x = 5
output = "C "
for i, item in enumerate(data):
    if (i+1) % 3 == 0:
        x += 5
        y = 100 - item["value"] * 100
        output += str(x/100) + "," + str(y) + " "
        if i + 1 < len(data):
            output += "C "

print(output)
