# vscode Dark+ Syntax


<span style="color:#D4D4D4;"> @string-gray </span>


<span style="color:#D4D4D4;"> @string-gray: #D4D4D4 </span> <br>
<span style="color:#808080;"> @tag-gray: #808080 </span> <br>
<span style="color:#282c34;"> @atom-gray: #282c34 </span> <br>
<span style="color:#1E1E1E;"> @very-dark-gray: #1E1E1E </span> <br>

<span style="color:#D16969;"> @light-red: #D16969 </span> <br>
<span style="color:#F44747;"> @dark-red: #F44747 </span> <br>
<span style="color:#CE9178;"> @orange: #CE9178 </span> <br>
<span style="color:#DCDCAA;"> @light-yellow: #DCDCAA </span> <br>
<span style="color:#D7BA7D;"> @dark-yellow: #D7BA7D </span> <br>
<span style="color:#B5CEA8;"> @puke: #B5CEA8 </span> <br>
<span style="color:#608B4E;"> @comment-green: #608B4E </span> <br>
<span style="color:#4EC9B0;"> @sefoam-green: #4EC9B0 </span> <br>
<span style="color:#9CDCFE;"> @light-blue: #9CDCFE </span> <br>
<span style="color:#569CD6;"> @dark-blue: #569CD6 </span> <br>
<span style="color:#007ACC;"> @bright-blue: #007ACC </span> <br>
<span style="color:#646695;"> @purple: #646695 </span> <br>
<span style="color:#C586C0;"> @pink: #C586C0 </span> <br>

<!--
  ```less
  @string-gray:   #D4D4D4;
  @tag-gray:      #808080;
  @atom-gray:     #282c34;
  @very-dark-gray: #1E1E1E;

  @light-red:     #D16969;
  @dark-red:      #F44747;
  @orange:        #CE9178;
  @light-yellow:  #DCDCAA;
  @dark-yellow:   #D7BA7D;
  @puke:          #B5CEA8;
  @comment-green: #608B4E;
  @sefoam-green:  #4EC9B0;
  @light-blue:    #9CDCFE;
  @dark-blue:     #569CD6;
  @bright-blue:   #007ACC;
  @purple:        #646695;
  @pink:          #C586C0;
  ```
-->

1. `.syntax--comment`
  - comments
2. `.syntax--keyword`
  - `&.syntax--control`
    - `&.syntax--elements`
  - `&.syntax--operator`
  - `&.syntax--other.syntax--special-method `
  - `&.syntax--other.syntax--unit`
3. `.syntax--storage`
  - declarations? (let, var, const)
4. `.syntax--constant`
  - css attribute value
  - `&.syntax--character.syntax--escape`
    - syntax escape
  - `&.syntax--numeric`
    - numbers
  - `&.syntax--boolean`
    - boolean
  - `&.syntax--other.syntax--color`
  - `&.syntax--other.syntax--symbol`
  - `&.syntax--language.syntax--null`
5. `.syntax--variable`
  - `&.syntax--interpolation`
  - `&.syntax--parameter.syntax--function`
  - `&.syntax--language`
  - `&.syntax--variable`
    - `&.syntax--object`
6. `.syntax--invalid.syntax--illegal`
  - errors
7. `.syntax--string`
  - `&.syntax--regexp`
    - regex
    - `.syntax--source.syntax--ruby.syntax--embedded`
  - `&.syntax--other.syntax--link`
    - links
8. `.syntax--punctuation`
  - `&.syntax--definition`
    <!-- - `&.syntax--comment` -->
    - `&.syntax--array`, `&.syntax--parameters`, `&.syntax--string`, `&.syntax--variable`
      - `&.syntax--begin`, `&.syntax--end`
    - `&.syntax--heading`, `&.syntax--identity`
    - `&.syntax--bold`
    - `&.syntax--italic`
    - `&.syntax--entity`
  - `&.syntax--section`
    - `&.syntax--array`
    - `&.syntax--embedded`
  - `&.syntax--separator`
    - `&.syntax--key-value`
  - `&.syntax--terminator`
9. `.syntax--support`
  - `&.syntax--class`
  - `&.syntax--function`
      - `&.syntax--any-method`
  - `&.syntax--type`
  - `&.syntax--variable`
      - `&.syntax--dom`
10. `.syntax--entity`
  - `&.syntax--name`
      - `&.syntax--function`
      - `&.syntax--type`
  - `&.syntax--other`
    - `&.syntax--inherited-class`
    - `&.syntax--attribute-name`
      - `&.syntax--pseudo-element`
      - `&.syntax--attribute`  
  - `&.syntax--name.syntax--class`, `&.syntax--name.syntax--type.syntax--class`
    - `&.syntax--name.syntax--section`
    - `&.syntax--name.syntax--tag`
    - `&.syntax--name.syntax--attribute-name`
11. `.syntax--meta`
  - `&.syntax--class`
  - `&.syntax--delimiter`
      - `&.syntax--period`
  - `&.syntax--link`
  - `&.syntax--require`
  - `&.syntax--selector`
  - `&.syntax--separator`
  - `&.syntax--brace`
      - `&.syntax--round`
      - `&.syntax--square`
  - `&.syntax--tag`
      - HTML brackets
12. `.syntax--none`
  - none
13. `.syntax--markup`
  - `&.syntax--bold`
  - `&.syntax--changed`
  - `&.syntax--deleted`
  - `&.syntax--italic`
  - `&.syntax--heading .syntax--punctuation.syntax--definition.syntax--heading`
  - `&.syntax--inserted`
  - `&.syntax--list`
  - `&.syntax--quote`
  - `&.syntax--raw.syntax--inline`

### JavaScript
- Brackets
  - `.syntax--punctuation.syntax--method-parameters`
  - `.syntax--punctuation.syntax--function-parameters`
  - `.syntax--punctuation.syntax--parameters`
  - `.syntax--punctuation.syntax--separator`
  - `.syntax--punctuation.syntax--array`
- function name
  - `.syntax--entity.syntax--name.syntax--function`
- let var const function => extends
  - `.syntax--storage`
