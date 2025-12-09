function unlock_free_membership()
    local questionMarkChar = find_char("?", 0x4000)
    print(pack("ICH", questionMarkChar, 0))
    wait(1)
    lucky_dog = true
end
