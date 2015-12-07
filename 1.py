i = input()
floor = 0
for x in range(0, len(i)):
    if i[x] == '(':
        floor +=1;
    elif i[x] == ')':
        floor -=1;
print(floor)