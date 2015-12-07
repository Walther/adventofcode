paper = 0
ribbon = 0;
$stdin.each_line do |box|
    # Parse sides
    nums = box.split('x').map(&:to_i)
    l = nums[0]
    w = nums[1]
    h = nums[2]
    sides = [l,w,h]
    # Compute faces
    s1 = l*w
    s2 = w*h
    s3 = h*l
    faces = [s1, s2, s3]
    # Sum
    paper += 2 * faces.reduce(:+) + faces.min
    ribbon += 2 * sides.min(2).reduce(:+) + sides.reduce(:*)
end

print "paper: ", paper, "\n"
print "ribbon: ", ribbon, "\n"