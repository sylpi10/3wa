<?php

class Rectangle
{
    private $w;
    private $h;

    public function __construct($w, $h)
    {
        $this->w = $w;
        $this->h = $h;
    }

    public function getW()
    {
        return $this->w;
    }
    public function setW($w)
    {
        return $this->w = $w;
    }
}

$rec = new Rectangle(10, 20);

$rec->setW(55);

echo $rec->getW();
