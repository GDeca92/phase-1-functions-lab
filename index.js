function distanceFromHqInBlocks (blocks) {
    if (blocks > 42)
        return blocks - 42
    else (blocks < 42)
        return 42 - blocks
}

function distanceFromHqInFeet (feet) {
    if (feet > 42)
        return (feet - 42) * 264
    else (feet < 42)
        return (42 - feet) * 264
}

function distanceTravelledInFeet (start0, destination0) {
    if (start0 > destination0)
        return (start0 - destination0) * 264
    else (start0 < destination0)
        return (destination0 - start0) * 264
}

function calculatesFarePrice (start, destination) {
    let block = start - destination
    let travel = Math.abs(block) * 264
    if (travel <= 400) {
        return 0
    }
    else if (travel > 400 && travel <= 2000) {
        return (travel - 400) * 0.02
    }
    else if (travel > 2000 && travel <= 2500) {
        return 25
    }
    else if (travel > 2500) {
        return "cannot travel that far"
    }
}