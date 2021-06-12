n = int(input())
b = [int(input()) for _ in range(n)]

ans = 0
low = 0
high = n - 1

while(low != high):
	temp = abs(b[low] - b[high]) + abs(low - high)
	if(temp > ans):
		ans = temp
	else:
		low_diff = abs(b[low] - b[low + 1])
		high_diff = abs(b[high] - b[high - 1])
		if(low_diff <= high_diff):
			low += 1
		else:
			high += 1
print(ans)




from itertools import accumulate

health = int(input())
attacks = int(input())

power = list(accumulate(sorted([int(input()) * 2 for _ in range(attacks)], reverse=True)))
power.append(0)

if(health > power[-2]):
    print(-1)
else:
    ans = 0
    for i in range(attacks):
        diff = health - power[i]
        if(diff <= 0):
            if((health - (((power[i] - power[i - 1]) // 2) + power[i - 1])) <= 0):
                ans += 1
                break
            ans += 2
            break
        else:
            ans += 2
    print(ans)
    




n = int(input())
p = int(input())
problem = sorted([int(input()) for _ in range(n)])
first = 0
second = 1
if(p == 1):
	print(problem[first] + problem[second])

i = 2
else:
	while(i <= p):
		temp_1 = problem[first + 1] + problem[second]
		temp_2 = peoblem[first] + problem[second + 1]
		if(temp_1 <= temp_2):
			first += 1
		else:
			second += 1
		i += 1
	else:
		print(problem[first] + problem[second])





