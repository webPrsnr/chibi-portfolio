import { describe, expect, it } from "vitest";
import { parseStyleProps } from "../parse-style-props";

describe('parseStyleProps', () => {
    it('should return empty object', () => {
        const result = parseStyleProps({m:undefined, c:undefined})
        expect(result).toEqual({})
    })
    
    it('should skip undefined props', () => {
        const result = parseStyleProps({m:'md', c:undefined})
        expect(result).not.toHaveProperty('color')
        expect(result).toHaveProperty('margin')
    })

    it('should return empty object', () => {
        const result = parseStyleProps({})
        expect(result).toEqual({})
    })
})
