---
layout: post
title: "C++ Sort Segmentation Fault"
description: "c++,段错误,segmentation fault,sort"
category: 
tags: [C++,STL,segmentation fault]

---
{% include JB/setup %}

C++ std的sort，compare函数写成下面这样，可能出现segmentation fault，因为写成a>=b是错误的，不符合stl的strict weak ordering关系。

	bool cmp(int a,int b){
	    return a>=b;
	}


### std::sort

	template< class RandomIt, class Compare >

	void sort( RandomIt first, RandomIt last, Compare comp );

其中[Compare](http://en.cppreference.com/w/cpp/concept/Compare)函数需要满足strict weak ordering关系,即：

	For all a, comp(a,a)==false
	If comp(a,b)==true then comp(b,a)==false
	if comp(a,b)==true and comp(b,c)==true then comp(a,c)==true

那为什么会导致段错误呢，sort源码中有这么一个辅助函数：

	template <class _RandomAccessIter, class _Tp, class _Compare>
	_RandomAccessIter __unguarded_partition(_RandomAccessIter __first, 
		                                _RandomAccessIter __last, 
		                                _Tp __pivot, _Compare __comp) 
	{
	  while (true) {
	    while (__comp(*__first, __pivot))
	      ++__first;
	    --__last;
	    while (__comp(__pivot, *__last))
	      --__last;
	    if (!(__first < __last))
	      return __first;
	    iter_swap(__first, __last);
	    ++__first;
	  }
	}

可见第二层while循环并没有检查边界，pivot应该在首/尾吧，只要compare满足strict weak ordering，访问就不会越界;否则，有可能一直++__first，它就跑过头了，很可能导致段错误。

这种方式避免了边界检查，优点是效率高点。



### 源码
[stl_algo.h](https://www.sgi.com/tech/stl/download.html)
