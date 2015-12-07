i = input()
floor = 0
instruction = 0
for x in range(0, len(i)):
    if i[x] == '(':
        floor +=1
    elif i[x] == ')':
        floor -=1
    if (floor < 0 and instruction == 0):
        instruction = x+1
print("floor: %s" % floor)
print("basement entry: %s" % instruction)