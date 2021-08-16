import React from "react";
import Example from "../utils/example";
import Scroll from "../../lib/scroll/scroll";

const scrollDefault = `import Scroll from "./scroll";
<Scroll>
  <p>content 1</p>
  ......
  <p>content 60</p>
</Scroll>`;

const ScrollDefault = () => {
  return (
    <Example
      title="组件和代码示例"
      description="滚动条的基本用法"
      code={scrollDefault}
    >
      <Scroll
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "3px",
          border: "1px solid rgba(0, 0, 0, 0.2)",
        }}
      >
        <p>content 1</p>
        <p>content 2</p>
        <p>content 3</p>
        <p>content 4</p>
        <p>content 5</p>
        <p>content 6</p>
        <p>content 7</p>
        <p>content 8</p>
        <p>content 9</p>
        <p>content 10</p>
        <p>content 11</p>
        <p>content 12</p>
        <p>content 13</p>
        <p>content 14</p>
        <p>content 15</p>
        <p>content 16</p>
        <p>content 17</p>
        <p>content 18</p>
        <p>content 19</p>
        <p>content 20</p>
        <p>content 21</p>
        <p>content 22</p>
        <p>content 23</p>
        <p>content 24</p>
        <p>content 25</p>
        <p>content 26</p>
        <p>content 27</p>
        <p>content 28</p>
        <p>content 29</p>
        <p>content 30</p>
        <p>content 31</p>
        <p>content 32</p>
        <p>content 33</p>
        <p>content 34</p>
        <p>content 35</p>
        <p>content 36</p>
        <p>content 37</p>
        <p>content 38</p>
        <p>content 39</p>
        <p>content 40</p>
        <p>content 41</p>
        <p>content 42</p>
        <p>content 43</p>
        <p>content 44</p>
        <p>content 45</p>
        <p>content 46</p>
        <p>content 46</p>
        <p>content 47</p>
        <p>content 48</p>
        <p>content 49</p>
        <p>content 50</p>
        <p>content 51</p>
        <p>content 52</p>
        <p>content 53</p>
        <p>content 54</p>
        <p>content 55</p>
        <p>content 56</p>
        <p>content 57</p>
        <p>content 58</p>
        <p>content 59</p>
        <p>content 60</p>
      </Scroll>
    </Example>
  );
};

export default ScrollDefault;
