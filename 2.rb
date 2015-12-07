total = 0
$stdin.each_line do |box|
    nums = box.split('x').map(&:to_i)
    l = nums[0]
    w = nums[1]
    h = nums[2]
    s1 = l*w
    s2 = w*h
    s3 = h*l
    total += 2*(s1 + s2 + s3) + [s1, s2, s3].min
end

print total